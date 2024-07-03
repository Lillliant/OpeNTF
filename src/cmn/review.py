import json
from cmn.member import Member
from cmn.team import Team

class Review(Team):
    def _init_(self, id, title, year, fos, reviewers):
        super().__init__(id, reviewers, fos, year)
        self.title = title
    
    @staticmethod
    def read_data(datapath, output, index, filter, settings):
        try:
            return super(Review, Review).load_data(output, index)
        except (FileNotFoundError, EOFError) as e:
            print(f"Pickles not found! Reading raw data from {datapath} (progress in bytes) ...")
            teams = {}; candidates = {}

            with open(datapath, "r", encoding='utf-8') as jf:
                for line in jf:
                    try:
                        if not line: break
                        jsonline = json.loads(line.lower().lstrip(","))
                        id = jsonline['id']

                        # a team must have some match of skills and members
                        try: reviewers = jsonline['reviewers']
                        except: continue
                        try: fos = jsonline['fos']
                        except: continue

                        title = jsonline['title']
                        year = jsonline['year']

                        members = []
                        for reviewer in reviewers:
                            member_id = reviewer['id']
                            member_name = reviewer['name'].replace(" ", "_")
                            # candidate is the full list of all experts across teams
                            if (idname := f'{member_id}_{member_name}') not in candidates:
                                candidates[idname] = Member(member_id, member_name)
                                candidates[idname].skills.update(set(reviewer['expertise']))
                            members.append(candidates[idname])
                            
                        team = Review(id, title, year, fos, members)
                        teams[team.id] = team
                    except json.JSONDecodeError as e:  # ideally should happen only for the last line ']'
                        print(f'JSONDecodeError: There has been error in loading json line `{line}`!\n{e}')
                        continue
                    except Exception as e:
                        raise e
            return super(Review, Review).read_data(teams, output, filter, settings)
        except Exception as e: raise e