#! /bin/bash

apt-get install -qq -y gettext

echo ${GCP_SERVICE_KEY} > ${HOME}/gcloud-service-key.json

## Authorize gcloud
gcloud auth activate-service-account --key-file=${HOME}/gcloud-service-key.json

## kubeconfig file generation for kubectl
gcloud container clusters get-credentials go-circle-gke --zone us-central1-a --project cd-pipeline-test