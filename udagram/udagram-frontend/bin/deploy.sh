aws s3 cp ./www s3://udagram-front/ --recursive --acl public-read 
aws s3 cp ./www/index.html s3://udagram-front/  --acl public-read --cache-control="max-age=0, no-cache, no-store, must-revalidate" 