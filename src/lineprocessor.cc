#include <node.h>

namespace lineprocessor {

using v8::Exception;
using v8::FunctionCallbackInfo;
using v8::HandleScope;
using v8::Isolate;
using v8::Local;
using v8::Isolate;
using v8::Object;
using v8::Number;
using v8::String;
using v8::Value;

// Extracts a C string from a V8 Utf8Value.
const char* ToCString(const v8::String::Utf8Value& value) {
  return *value ? *value : "<string conversion failed>";
}

void Print(const v8::FunctionCallbackInfo<v8::Value>& args) {
  bool first = true;
  for (int i = 0; i < args.Length(); i++) {
    v8::HandleScope handle_scope(args.GetIsolate());
    if (first) {
      first = false;
    } else {
      printf(" ");
    }
    v8::String::Utf8Value str(args[i]);
    const char* cstr = ToCString(str);
    printf("%s", cstr);
  }
  //printf("\n");
  fflush(stdout);
}

v8::Handle<v8::String> ReadLineEx() {
  const int kBufferSize = 1024 + 1;
  char buffer[kBufferSize];

  char* res;
  {
    res = fgets(buffer, kBufferSize, stdin);
  }
  v8::Isolate* isolate = v8::Isolate::GetCurrent();
  if (res == NULL) {
    v8::Handle<v8::Primitive> t = v8::Undefined(isolate);
    return v8::Handle<v8::String>::Cast(t);
  }
  // Remove newline char
  for (char* pos = buffer; *pos != '\0'; pos++) {
    if (*pos == '\n') {
      *pos = '\0';
      break;
    }
  }
  return v8::String::NewFromUtf8(isolate, buffer);
}

// The callback that is invoked by v8 whenever the JavaScript 'read_line'
// function is called. Reads a string from standard input and returns.
void ReadLine(const v8::FunctionCallbackInfo<v8::Value>& args) {
  if (args.Length() > 0) {
    args.GetIsolate()->ThrowException(
        v8::String::NewFromUtf8(args.GetIsolate(), "Unexpected arguments"));
    return;
  }
  args.GetReturnValue().Set(ReadLineEx());
}

void init(Local<Object> exports) {
  NODE_SET_METHOD(exports, "read_line", ReadLine);
  NODE_SET_METHOD(exports, "print", Print);
}

NODE_MODULE(addon, init)

}