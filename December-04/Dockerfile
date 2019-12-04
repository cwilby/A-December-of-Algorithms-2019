FROM gcc:4.9
COPY . /usr/src/myapp
WORKDIR /usr/src/myapp
RUN gcc -o tests unity.c h_index.c h_index_test.c
CMD ["./tests"]