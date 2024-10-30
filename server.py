from http.server import HTTPServer, SimpleHTTPRequestHandler
import json

class WikiHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/api/health':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            response = {'status': 'healthy', 'runtime': 'python-wasi'}
            self.wfile.write(json.dumps(response).encode())
            return
            
        return super().do_GET()

def run(server_class=HTTPServer, handler_class=WikiHandler, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f"Starting server on port {port}...")
    httpd.serve_forever()

if __name__ == '__main__':
    run()