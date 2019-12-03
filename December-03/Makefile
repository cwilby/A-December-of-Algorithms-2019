test:
	find . -name "*.pyc" -delete
	docker build -t thanos_sort .
	docker run --rm -it thanos_sort