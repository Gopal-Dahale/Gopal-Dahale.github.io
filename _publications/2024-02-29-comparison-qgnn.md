---
title: "A Comparison Between Invariant and Equivariant Classical and Quantum Graph Neural Networks"
collection: publications
permalink: /publication/2023-11-30-comparison-qgnn
excerpt: "
<div style='text-align: center'>
	<img src='https://pub.mdpi-res.com/axioms/axioms-13-00160/article_deploy/html/images/axioms-13-00160-g005.png?1709188862' width=700 alt='Quantum graph neural network (QGNN, left) and equivariant quantum graph neural network (EQGNN, right) schematic diagrams.'/>
</div>
"
date: 2024-02-29
venue: 'Axioms'
citation: 'Forestano RT, Comajoan Cara M, <b>Dahale GR</b>, Dong Z, Gleyzer S, Justice D, Kong K, Magorsch T, Matchev KT, Matcheva K, et al. A Comparison between Invariant and Equivariant Classical and Quantum Graph Neural Networks. Axioms. 2024; 13(3):160. https://doi.org/10.3390/axioms13030160'
---

[[Paper]](https://www.mdpi.com/2075-1680/13/3/160)

## Abstract

Machine learning algorithms are heavily relied on to understand the vast amounts of data from high-energy particle collisions at the CERN Large Hadron Collider (LHC). The data from such collision events can naturally be represented with graph structures. Therefore, deep geometric methods, such as graph neural networks (GNNs), have been leveraged for various data analysis tasks in high-energy physics. One typical task is jet tagging, where jets are viewed as point clouds with distinct features and edge connections between their constituent particles. The increasing size and complexity of the LHC particle datasets, as well as the computational models used for their analysis, have greatly motivated the development of alternative fast and efficient computational paradigms such as quantum computation. In addition, to enhance the validity and robustness of deep networks, we can leverage the fundamental symmetries present in the data through the use of invariant inputs and equivariant layers. In this paper, we provide a fair and comprehensive comparison of classical graph neural networks (GNNs) and equivariant graph neural networks (EGNNs) and their quantum counterparts: quantum graph neural networks (QGNNs) and equivariant quantum graph neural networks (EQGNN). The four architectures were benchmarked on a binary classification task to classify the parton-level particle initiating the jet. Based on their area under the curve (AUC) scores, the quantum networks were found to outperform the classical networks. However, seeing the computational advantage of quantum networks in practice may have to wait for the further development of quantum technology and its associated application programming interfaces (APIs).