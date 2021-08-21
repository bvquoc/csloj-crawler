Bạn được cho biết số $N\ (N \le 1000)$ và dãy $A=(a_1,a_2,…,a_N)$. Để tránh việc phải đọc một lượng dữ liệu quá lớn, dãy $A$ sẽ được cho bởi ba số nguyên dương $p,q,m$, trong đó mỗi phần tử $a_i$ được xác định theo công thức: $a_i=p×i\text{ mod }m+q, (∀i:1≤i≤N)$.

Có $T$ câu hỏi dạng $u,v (u≤v)$ yêu cầu cho biết trong đoạn $a_u,a_{u+1},…,a_v$ có bao nhiêu số nguyên tố?

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương $N,T$;
- Dòng thứ hai chứa ba số nguyên dương $p,q,m$ xác định dãy $A\ (p,q,m≤10^6)$;
- $T$ dòng tiếp theo, dòng thứ $i$ chứa hai số $u,v$ tương ứng với câu hỏi $i$ là trong đoạn $a_u,a_{u+1},…,a_v$ có bao nhiêu số nguyên tố.

## Dữ liệu ra:
- Ghi trên $T$ dòng, dòng thứ $i$ ghi câu trả lời cho câu hỏi $i$.

## Ví dụ:
#### Dữ liệu vào:
```
5 4
2 1 9
1 3 
2 4
3 5
4 4
```

#### Dữ liệu vào:
```
3
2
2
0
```

#### Giải thích:
- Dãy $A=(3,5,7,9,2)$;
- Đoạn $[1,3]$ là $(3,5,7)$ có $3$ số nguyên tố;
- Đoạn $[2,4]$ là $(5,7,9)$ có $2$ số nguyên tố;
- Đoạn $[3,5]$ là $(7,9,2)$ có $2$ số nguyên tố;
- Đoạn $[4,4]$ là $(9)$ có $0$ số nguyên tố.

## Giới hạn:
- $40\%$ số điểm ứng với các test có $N≤1000,T=1$;
- $40\%$ số điểm ứng với các test có $N≤1000,T≤1000$;
- $20\%$ số điểm ứng với các test có $N≤1000,T≤10000$.