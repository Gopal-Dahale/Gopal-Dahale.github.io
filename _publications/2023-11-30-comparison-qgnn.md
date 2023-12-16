---
title: "A Comparison Between Invariant and Equivariant Classical and Quantum Graph Neural Networks"
collection: publications
permalink: /publication/2023-11-30-comparison-qgnn
excerpt: ''
date: 2023-11-30
venue: 'arxiv'
citation: 'Forestano RT, Cara MC, <b>Dahale GR</b>, Dong Z, Gleyzer S, Justice D, Kong K, Magorsch T, Matchev KT, Matcheva K, Unlu EB. A Comparison Between Invariant and Equivariant Classical and Quantum Graph Neural Networks. arXiv preprint arXiv:2311.18672. 2023 Nov 30.'
---

[[Paper]](https://arxiv.org/abs/2311.18672)

## Abstract

Machine learning algorithms are heavily relied on to understand the vast amounts of data from high-energy particle collisions at the CERN Large Hadron Collider (LHC). The data from such collision events can naturally be represented with graph structures. Therefore, deep geometric methods, such as graph neural networks (GNNs), have been leveraged for various data analysis tasks in high-energy physics. One typical task is jet tagging, where jets are viewed as point clouds with distinct features and edge connections between their constituent particles. The increasing size and complexity of the LHC particle datasets, as well as the computational models used for their analysis, greatly motivate the development of alternative fast and efficient computational paradigms such as quantum computation. In addition, to enhance the validity and robustness of deep networks, one can leverage the fundamental symmetries present in the data through the use of invariant inputs and equivariant layers. In this paper, we perform a fair and comprehensive comparison between classical graph neural networks (GNNs) and equivariant graph neural networks (EGNNs) and their quantum counterparts: quantum graph neural networks (QGNNs) and equivariant quantum graph neural networks (EQGNN). The four architectures were benchmarked on a binary classification task to classify the parton-level particle initiating the jet. Based on their AUC scores, the quantum networks were shown to outperform the classical networks. However, seeing the computational advantage of the quantum networks in practice may have to wait for the further development of quantum technology and its associated APIs.