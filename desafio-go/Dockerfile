
FROM golang AS go
COPY code-education.go .
RUN go build -ldflags "-s -w" -o code-education.go

FROM scratch
COPY --from=go /go/code-education.go .
ENTRYPOINT ["/code-education.go"]
