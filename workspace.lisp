(ql:quickload "hunchentoot")
(ql:quickload "cl-who")

(hunchentoot:start (make-instance 'hunchentoot:acceptor :port 4242))
(asdf:oos 'asdf:load-op :hunchentoot-test)

(import 'hunchentoot:*dispatch-table*)
(import 'hunchentoot:create-folder-dispatcher-and-handler)

(defvar file-handler (create-folder-dispatcher-and-handler
		      "/rdfquery/"
		      "/home/patrick/dev/rdfq-ex/public/")
  "A handler to serve files below the given URL from the given directory. not sure if it's best to keep the easy handlers first, so doing just that.")

(setq *dispatch-table* (list* (car *dispatch-table*)
			      file-handler
			      (cdr *dispatch-table*)))
