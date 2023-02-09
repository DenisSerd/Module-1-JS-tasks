
let url = new URL('https://www.google.com/doodles/rubiks-cube');
const funct = (str) => {
  const rootObject = {
    protocol: str.protocol,
    hostname: str.hostname,
  };
  let nextChild = rootObject;
  let paths = str.pathname.split('/');
  for (let i = 1; i < paths.length; i++) {
    nextChild.child = {
      path: paths[i]
    }
    nextChild = nextChild.child
  };
  console.log(rootObject);
};
funct(url);