Cho dãy số nguyên $A_1, A_2, …, A_n$. Giá trị của một đoạn trên dãy số chính là số cặp trên đoạn đó có giá trị bằng nhau.

**Yêu cầu:** Chia dãy số $A_1, A_2, …, A_n$ thành $K$ đoạn không giao nhau sao cho tổng giá trị của $K$ đoạn đạt giá trị bé nhất. Mỗi phần tử trong dãy chỉ nằm duy nhất một đoạn con nào đó trong $K$ đoạn.

## Dữ liệu vào:
- Dòng đầu ghi hai số nguyên dương $N, K\ (2 ≤N≤10^5, 2 ≤ K ≤ min(K,20))$;
- Dòng tiếp theo ghi dãy $A_1, A_2, …, A_n$ trong đó $(1 ≤ A_i ≤ N)$.

## Dữ liệu ra:
- Ghi ra một giá trị duy nhất là tổng giá trị $K$ đoạn con theo yêu cầu đề bài.

## Ví dụ:
### Dữ liệu vào:
```
7 3
1 1 3 3 3 2 1
```

### Dữ liệu ra:
```
1
```

### Dữ liệu vào:
```
10 2
1 2 1 2 1 2 1 2 1 2
```

### Dữ liệu ra:
```
8
```