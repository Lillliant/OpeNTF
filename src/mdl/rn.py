from sklearn.neural_network import MLPClassifier
from mdl.ntf import Ntf
import pickle

class Random(Ntf):
    def __init__(self):
        super(Random, self).__init__()
    
    def init(self):
        self.model = MLPClassifier() # empty classifier
        return self

    def learn(self, splits, indexes, vecs, params, prev_model, output):
        # splits, vecs, and indexes are components of the preprocessed data
        # params come from param.py

        for foldidx in splits['folds'].keys():
            self.init()
            with open(f"{output}/state_dict_model.f{foldidx}.pt","wb") as f: pickle.dump(self.model,f)