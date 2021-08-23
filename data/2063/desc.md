**<center>Nguồn: Free Contest 8 (9)</center>**

Xâu Fibonacci thường được sử dụng để rèn luyện kỹ năng xử lí khi giới thiệu các giải thuật xử lí xâu.

Xét dãy xâu $F_0, F_1, F_2, \dots,$ được xây dựng theo quy tắc sau:
- $F_0 = 'a'$
- $F_1 = 'b'$
- $F_n = F_{n-1} + F_{n-2}, n>1$

**Yêu cầu:** Cho hai số nguyên $n, k$ ($n\le 45, k$ không vượt quá độ dài xâu $F_n$). Hãy xác định số lượng ký tự $'a'$ xuất hiện trong $k$ ký tự đầu tiên của xâu $F_n$.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên dương $T$ là số bộ dữ liệu $(T\le 100)$;
- $T$ dòng sau, mỗi dòng chứa hai số nguyên $n, k$.

## Dữ liệu ra:
- Ghi ra $T$ dòng tương ứng là kết quả của $T$ bộ dữ liệu đầu vào.

## Ví dụ:
### Dữ liệu vào:
```
4
0 1
1 1
3 2
7 7
```

### Dữ liệu ra:
```
1
0
1
3
```