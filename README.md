# Do not push to master!

### When you want to create the client for your language:
+ create a new branch
+ edit travis config to refer to the docker image `oxyl/grpc-lb:yourlanguage`
+ create the dockerfile that goes with your language

### client requirements:
+ client.yaml must use `imagePullPolicy: Always` for the image of the container
+ connect to headless service on port 9000
+ round robin requests between the 2 servers
+ send logs of the responses from the 2 servers with hostnames

### When you want to test your client
+ check that travis build pass and docker image is pushed to your language tag
+ head to https://www.katacoda.com/courses/kubernetes/playground
+ get `k8/server.yaml` from the `server` branch
+ get `k8/client.yaml` from your branch
+ `kubectl apply -f server.yaml`
+ `kubectl apply -f client.yaml`
+ check that the pods are running with `watch kubectl get pod`. If they're not, pull the pod logs with `kubectl logs <pod_name>`

