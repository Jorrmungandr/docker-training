# docker-training
Um treinamento de docker pra o pessoal do CITi na FAI 2021

**Como rodar:**

1. Faça o build da imagem:

    ```bash
    sudo docker build . --tag [NOME_DA_IMAGEM]
    ```

    - Verifique se sua imagem foi buildada com sucesso:

        ```bash
        sudo docker image ls
        ```

        Caso tenha sido, ela aparecerá na lista de imagens

2. Rode a imagem com um container:

    ```bash
    sudo docker run -dp 3000:3000 [NOME_DA_IMAGEM]
    ```

- Para listar os containers:

    ```bash
    sudo docker container ls
    ```

- Para parar um container:

    ```bash
    sudo docker stop [CONTAINER_ID]
    ```
