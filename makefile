# https://codelabclub.github.io/
update:
	git checkout home;
	cp -rp ../NewCodeLabWeb/build/* .
push:
	git checkout home;
	git push origin home
