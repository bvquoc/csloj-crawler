**<center>Nguồn: Beginner Free Contest 8</center>**

Cho một dãy số nguyên $a$ gồm $n$ phần tử. Các phần tử trong dãy được sắp xếp theo trình tự tăng dần, tức là $a_i ≤ a_{i+1}$ với mọi $1 ≤ i < n$.

Ta định nghĩa độ đẹp của dãy $a$ là khoảng cách lớn nhất giữa hai phần tử liên tiếp bất kì trong dãy. Nói cách khác, độ đẹp của dãy $a$ là giá trị $a_i − a_{i−1}$ lớn nhất với mọi $2 ≤ i ≤ n$.

Hãy xóa một phần tử bất kì trong dãy $a$ sao cho độ đẹp của dãy nhận được là lớn nhất có thể.

## Dữ liệu vào:
- Dòng đầu tiên gồm số nguyên $n\ (3 ≤ n ≤ 1000)$ - số phần tử trong dãy;
- Dòng thứ hai gồm $n$ số nguyên $a_1, a_2, . . . , a_n\ (1 ≤ a_i ≤ 10^9)$ - số phần tử trong dãy.

## Dữ liệu ra:
- In ra độ đẹp lớn nhất của dãy $a$ sau khi xóa đi một phần tử bất kì.

## Ví dụ:
#### Dữ liệu vào:
```
4
2 4 5 6
```

## Dữ liệu ra:
```
3
```

#### Dữ liệu vào:
```
5
1 2 2 3 4
```

## Dữ liệu ra:
```
2
```

#### Dữ liệu vào:
```
5
1 1 1 1 1
```

## Dữ liệu ra:
```
0
```

#### Giải thích:
- Với ví dụ thứ nhất, ta sẽ xóa đi phần tử thứ $2$ trong dãy $a$. Dãy sau khi xóa là $[2, 5, 6]$ và có độ đẹp là $3$.
- Với ví dụ thứ hai, ta sẽ xóa đi phần tử thứ $4$ trong dãy $a$. Dãy sau khi xóa là $[1, 2, 2, 4]$ và có độ đẹp là $2$.
- Với ví dụ thứ ba, dù xóa đi phần tử nào thì độ đẹp của dãy thu được cũng đều bằng $0$.