interface Foo {
  foo: string;
}

function foo(sample: Foo): Foo {
  console.log(sample.foo);
  return sample;
}

foo({ foo: "来自typescript的友好问候" });

export { foo };
