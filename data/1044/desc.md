**<center>NGUỒN: VOI Training Camp 3H  (Ngày 02/11/2016 Am)</center>**
<br>

Hai hàm số $f$ và $g$ $(f,g:X→X)$ được gọi là giao hoán nhau nếu $f(g(x))=g(f(x))\ ∀x∈X$. Ví dụ hàm $f(x)=x+1$ và $g(x)=x+2$ là giao hoán. Hai hàm $f(x)=x+1$ và $g(x)=2x$ không giao hoán. Hàm số $f:X→X$ được gọi là song ánh với $∀y∈X$ nếu tồn tại một và chỉ một giá trị $x∈X$ sao cho $y=f(x)$.

**Yêu cầu:** Cho hàm số $f:N_n→N_n$ song ánh, với $N_n=\{1,2,3,….,n\}$. Xác định dãy $b_1,b_2,…,b_n$ có thứ tự từ điển nhỏ nhất với $b_i=g(i)$ và $g$ là hàm số giao hoán của $f$.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương $n\ (n≤2.10^5)$. 
- Dòng thứ hai chứ $n$ số nguyên dương biểu diễn giá trị $f(1),f(2),….,f(n)$.

## Dữ liệu ra:
- Ghi ra $n$ số nguyên $b_1,b_2,b_3,…,b_n$

## Ví dụ:
### Dữ liệu vào:
```
10
2 3 4 5 6 7 8 1 9 10
```

### Dữ liệu ra:
```
1 2 3 4 5 6 7 8 9 9
```

## Giới hạn:
- $30\%$ số test $n≤10$