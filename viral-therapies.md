
## Choosing a viral vector

### Types of viral vectors
- oncolytic adenoviruses
- type 1 herpes simplex virus (HSV)
- polioviruses
- measles virus (MV)
- Newcastle disease virus (NDV)
- reoviruses
- vesicular stomatitis virus (VSV)
- Zika virus
- coxsackievirus

### Criteria
- RNA viruses generally kill cancer cells faster than DNA viruses because they do not need to enter the nucleus
    - they are less tumor-selective
- enveloped viruses are less efficient than naked viruses
- enveloped viruses are more likely to be cleared by the immune system
- smaller viruses are better able to diffuse through a tumor
- larger viruses are better able to encode therapeutic genes
- other factors (**TODO**) [^zheng22]
    - tumor tropism
    - potential pathogenicity
    - immunogenicity
    - druggability
    - viral stability

## Retargeting OVs
- three main categories of approaches
    - capsid development
    - genome engineering
    - chemical modifications

### Capsid development
- insert peptides or protein domains in viral capsid to facilitate attachment of OVs to cell membranes of targeted tumor cells
- strategy 1:
    - developed random peptide-displaying library
    - bruteforce experimentation to see which peptides target specific tumor cells
- strategy 2:
    - insert scFv fragments that target receptors present only on tumor cells[^menotti08] [^totsch19]

### Genome engineering
- constructing _conditionally replicating OVs_
    - delete viral genes essential for viral replication in normal cells
        - E1A, E1B regions, HSV-thymidine kinase (HSV-TK)
    - deleting tumor-suppressor genes makes a cancer cell more susceptible to viral infection
    - use tumor-specific promoters that are only turned on in cancer cells

### Chemical modifications
- PEG
- poly-N-(2-hydroxylpropyl) methacrylamide
- mine-based PEGylation
- pH sensitive polymer complexes (since TMEs are more acidic than normal tissue)

### Limitations of approaches
- capsid modifications are not usually heritable

## OV delivery platforms
- challenges
    - rapid growth of tumors
    - impaired blood supply
    - abnormal lymphatic networks
    - vascular hyperpermeability inside tumors
    - dense ECM of solid tumors
    - antiviral functions of host immune system
- methods
    - use chemokine-dependent cellular vehicles
    - nanoparticle coatings to avoid immune system sequestering
    - ultrasound and magnetic drug-targeting systems [^zheng45] [^zheng46]

## Enhancing OV infiltration and diffusion
- barriers
    - virus envelope type and size
    - tumor microenvironment
- methods
    - use enzymes to degrade the tumor stroma
    - induce cell-cell fusion[^zheng54]

## Overcoming the immunosuppressive TME
- methods to prime immune system: encode genes for 
    - cytokines
    - tumor-associated antigens
    - T-cell costimulatory molecules
    - immune checkpoint inhibitors (ICIs)
    - cell suicide genes

### Cytokines and chemokines
- in TMEs, function of APCs is impaired; need way to recover APC presentation ability
- GM-CSF is a regulatory cytokine that can
    - activate APCs
    - promote maturation
    - increase both CD4+ and CD8+ T cells

### Tumor-associated anigens
- creates an anti-tumor immunity (cancer vaccine)[^zheng92]

### Suicide-genes and prodrug conversion
- harmless until activated by antibody or drug

## Tracking virotherapy
- need better ways to tracking virotherapy in the patient
- inserting reporter genes

[^zheng22]: [Integrating oncolytic viruses in combination cancer immunotherapy](https://www.nature.com/articles/s41577-018-0014-6)
[^yamamoto17]: [`zheng22/24`: Recent advances in genetic modification of adenovirus vectors for cancer treatment](https://onlinelibrary.wiley.com/doi/10.1111/cas.13228)
[^menotti08]: [Construction of a fully retargeted herpes simplex virus 1 recombinant capable of entering cells solely via human epidermal growth factor receptor 2](https://pubmed.ncbi.nlm.nih.gov/18684832/)
[^totsch19]: [Oncolytic herpes simplex virus immunotherapy for brain tumors: current pitfalls and emerging strategies to overcome therapeutic resistance](https://pubmed.ncbi.nlm.nih.gov/31289361/)
[^zheng45]: [Using a magnetic field to redirect an oncolytic adenovirus complexed with iron oxide augments gene therapy efficacy](https://pubmed.ncbi.nlm.nih.gov/26164117/)
[^zheng46]: [Achieving systemic delivery of oncolytic viruses](https://pubmed.ncbi.nlm.nih.gov/31144549/)
[^zheng54]: [Reovirus FAST Protein Enhances Vesicular Stomatitis Virus Oncolytic Virotherapy in Primary and Metastatic Tumor Models](https://pubmed.ncbi.nlm.nih.gov/28856238/)
[^zheng92]: [Antigen-specific oncolytic MV-based tumor vaccines through presentation of selected tumor-associated antigens on infected cells or virus-like particles](https://pubmed.ncbi.nlm.nih.gov/29203786/)