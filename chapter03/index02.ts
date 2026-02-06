type Watcher<T> = {
  on<K extends keyof T & string>(event: `${K}Update`, callback: (newVal: T[K], oldVal: T[K]) => void): void;
}


declare function watch<T>(val: T): Watcher<T>;


const watcher = watch({
  name: 'John',
  age: 18
})

watcher.on('nameUpdate', (newVal, oldVal) => {})
watcher.on('ageUpdate', (newVal, oldVal) => {})