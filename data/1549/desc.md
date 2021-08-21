Cho dãy $n$ số nguyên dương $a_1,a_2,…,a_n$ thỏa mãn $\frac{i(i-1)}{2} < a_i≤\frac{i(i+1)}{2}$.

Từ dãy số trên ta xây dựng một cây có $\frac{(n+1)(n+2)}{2}$ đỉnh bao gồm $n+1$ mức với số đỉnh lần lượt là $1,2,…,n+1$ theo cách sau:
- Ở mức thứ $i$ có các đỉnh được gán nhãn $\frac{i(i-1)}{2}+1,…,\frac{i(i+1)}{2}$;
- Trừ mức $n+1$, ở mỗi mức, đỉnh có nhãn $a_i$ có $2$ nút con, các đỉnh còn lại chỉ có $1$ nút con.
<center><img src="/images/problems/1549/LCA.svg" width=300px" />

Một cây được xây dựng từ dãy $a=(1,2,6)$
</center> 

Có $q$ truy vấn, mỗi truy vấn có dạng “Nút cha lớn nhất của $x$ và $y$ là nút nào?” Tức là ta cần tìm đỉnh có nhãn lớn nhất và là nút cha chung của $x$ và $y$.

## Dữ liệu vào:
- Dòng đầu chứa ba số nguyên $n,q,t\ (1≤n,q≤2×10^5,t∈\{0,1\})$ là số phần tử của dãy, số truy vấn và tham số để xác định nhãn của các đỉnh trong các quy vấn;
- Dòng thứ hai chứa $n$ phần tử của dãy $a$;
- $q$ dòng tiếp theo, dòng thứ $i$ chứa hai số ${\tilde x_i},{\tilde y_i}\ (1≤{\tilde x_i},{\tilde y_i}≤\frac{(n+1)(n+2)}{2})$ được sử dụng để xác định nhãn $x_i,y_i$ của truy vấn thứ $i$.

Gọi $z_i$ là đáp án của truy vấn thứ $i\ (z_0=0)$. Khi đó, nhãn $x_i,y_i$ của truy vấn thứ $i$ được xác định như sau:
$$x_i=({\tilde x_i}-1+t×z_{i-1})\text{ mod }\frac{(n+1)(n+2)}{2}+1,$$
$$y_i=({\tilde y_i} - 1+t×z_{i-1})\text{ mod }\frac{(n+1)(n+2)}{2}+1,$$

ở đây $mod$ là phép chia lấy phần dư.

**Lưu ý:** Khi $t=0$ thì $x_i={\tilde x_i},y_i={\tilde y_i}$.

## Dữ liệu ra:
- Ghi ra $q$ dòng, dòng thứ $i$ là đỉnh có nhãn lớn nhất là cha chung của $x_i$ và $y_i$.

## Ví dụ:
#### Dữ liệu vào:
```
3 5 0
1 2 6
7 10
8 5
6 2
9 10
2 3
```

#### Dữ liệu ra:
```
1
5
1
6
1
```

#### Dữ liệu vào:
```
3 5 1
1 2 6
7 10
8 5
6 2
9 10
2 3
```

#### Dữ liệu ra:
```
1
6
2
1
1
```

#### Giải thích:
Trong cả hai test ví dụ thì cây được cho bởi hình trên. Đối với test ví dụ thứ $2$ ta có:
- $x_1=7,y_1=10$, cha chung là $1$;
- $x_2=9,y_2=6$, cha chung là $6$;
- $x_3=2,y_3=8$, cha chung là $2$;
- $x_4=1,y_4=2$, cha chung là $1$;
- $x_5=3,y_5=4$, cha chung là $1$.

## Giới hạn:
- Subtask $\#1: 10\%$ số điểm có $q=1,t=0$;
- Subtask $\#2: 10\%$ số điểm khác có $n≤1000,t=0$;
- Subtask $\#3: 25\%$ số điểm khác có $t=0$;
- Subtask $\#4: 55\%$ số điểm còn lại có $t=1$.