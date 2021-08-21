Xét cách biểu diễn số bởi các que diêm.
<center><img src="/images/problems/339/dkdiginum1.png" width=600px></center>

Cho hai số $l, r$, hãy tìm số que diêm ít nhất và số que diêm nhiều nhất để biểu diễn được một số trong đoạn $[l, r]$.

## Dữ liệu vào:
- Dòng đầu ghi số nguyên dương $T$ là số bộ test;
- $T$ dòng tiếp theo, mỗi dòng chứa hai số nguyên dương $l, r$.

## Dữ liệu ra:
- Gồm $T$ dòng, mỗi dòng gồm hai số nguyên dương $a,b$ lần lượt là số que diêm ít nhất và số que diêm nhiều nhất biểu diễn được một số trong đoạn $[l, r]$ (các số cách nhau bởi dấu cách).

## Ví dụ:
#### Dữ liệu vào:
```
2
1 10
123 456
```

#### Dữ liệu ra:
```
2 8
7 19
```

## Giải thích:
- Test case $\#1$: Số $1$ biểu diễn bởi $2$ que diêm (ít nhất), số $10$ biểu diễn bởi $8$ que diêm (nhiều nhất).
- Test case $\#2$: Số $171$ biểu diễn bởi $7$ que diêm (ít nhất), số $388$ biểu diễn bởi $19$ que diêm (nhiều nhất)

## Giới hạn:
- $1≤T≤10^3,1≤l≤r≤10^{18},r-l≤10^5$ 