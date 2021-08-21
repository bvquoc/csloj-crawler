**<center>NGUỒN: CONTEST LÀO CAI Lần 2 2017</center>**

Cho $n+1$ ô (đánh số thứ tự từ $0$ đến $n$), Hải Dương sẽ nhảy lò cò từ ô số $0$ và kết thúc tại ô $n$. Tại mỗi bước nhảy, nếu Hải Dương đang ở ô số $u\ (0≤ u ≤ n-1)$ thì Hải Dương có thể:

- Chọn một số nguyên dương $a_i\  (1≤i≤k)$ bất kỳ từ tập $k$ số nguyên dương $a_1,a_2,..a_k$;
- Nhảy đến ô  $u+a_i$.

**Yêu cầu**: Đếm số cách khác nhau để Hải Dương có thể nhảy từ ô số $0$ đến ô số $n$ theo modulo $10^9+7$.

**Ghi chú**: Hai dãy số $x_1,x_2,…,x_n$ và $y_1,y_2,…,y_m$ được gọi là khác nhau nếu:

- $n≠m$ hoặc
- $\left\{\begin{matrix}m=n\\ \exists i, x_i=y_i\end{matrix}\right.$

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên dương $n,k\ (1< n \le 10^4, 1 <  k ≤ 10^4)$;
- Dòng tiếp theo chứa $k$ số nguyên dương $a_i\ (1≤a_i≤10^4,1≤ i ≤ k)$.
Các số trên một dòng được ghi cách nhau bởi dấu cách.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là số cách khác nhau để Hải Dương có thể nhảy từ ô số $0$ đến ô số $n$ theo modulo $10^9+7$.

## Ví dụ:
#### Dữ liệu vào:
```
3 4
1 2 2 2
```

#### Dữ liệu ra:
```
3
```

#### Giải thích:
- Có ba cách sau: $(1,1,1); (1,2)\text{ và }(2,1)$

#### Dữ liệu vào:
```
3 4
2 2 2 2
```

#### Dữ liệu ra:
```
0
```