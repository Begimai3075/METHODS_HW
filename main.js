//? Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

// let a = [1,2,3]
// let b = [4,5,6]
// console.log(a.concat(b))

//? Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

// let c = [1,2,3]
// console.log(c.reverse())

//? Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

// let d = [1,2,3]
// d.push(4,5,6)
// console.log(d)

//?  Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

// let e = [1,2,3]
// e.unshift(4,5,6)
// console.log(e)

// ?Дан массив ['js', 'css', 'jq']. Выведите в консоли  первый элемент.

// let f = ['js', 'css', 'jq']
// console.log(f.shift())

// ?Дан массив ['js', 'css', 'jq']. Выведите а консоли последний элемент. 

// let ar = ['js', 'css', 'jq']
// console.log(arr.pop())

// ?Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

// let r = [1, 2, 3, 4, 5]
// console.log(r.slice(0,3))

// ? Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
// let t = [1, 2, 3, 4, 5]
// console.log(t.slice(3))

//? Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

// let m = [1, 2, 3, 4, 5]
// m.splice(1,2)
// console.log(m.splice(1,2))

// ? Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

// let i = [1, 2, 3, 4, 5]
// console.log(i.splice(1,3))

// ? Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

let arr = [1, 2, 3, 4, 5]
arr.splice(3,0,'a','b','c')
console.log(arr)



// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']

let b = [1, 2, 3, 4, 5]
b.splice(4,0,'c',)
b.splice(6,0,'e',)
b.splice(1,0,'a','b',)
console.log(b)