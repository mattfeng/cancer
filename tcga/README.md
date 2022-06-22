# Introduction to The Cancer Genome Atlas (TCGA)

## Detecting somatic single nucleotide variations (SSNVs)
- **Mutation allelic fraction**. the fraction of alleles from a locus that carry a mutation
  - Allelic fraction = $\frac{cMP}{Pk + 2(1-P)}$
    - $M$. multiplicity
    - $P$. purity
    - $k$. local copy number; the copy number of tumor cells
    - $c$. cancer cell fraction; the number of tumor cells that have a mutation at the locus of interest
- [MuTect: A highly sensitive somatic mutation caller](https://software.broadinstitute.org/cancer/cga/mutect)
- average rate of SSNVs: 1 mutation for every million bp (denoted `1/Mb`)

## References
- [Chapter 23: Cancer Genome Sequencing, Mutation Analysis (Harvard STAT115)](https://liulab-dfci.github.io/bioinfo-combio/cancerseq.html)
