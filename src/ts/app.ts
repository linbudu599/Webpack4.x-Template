interface Foo {
  foo: string;
}

function foo(sample: Foo): Foo {
  console.log(sample.foo);
  return sample;
}

export { foo };
