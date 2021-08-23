<!--**<center>NGUỒN: ĐỀ THI THỬ VOI 2015 3HB (Hải phòng - Hải Dương - Hưng Yên - Bắc Giang)</center>**-->

Cho dãy $n$ số nguyên dương $P=(p_1,p_2,…,p_n)$ và một số nguyên $k\ (0≤k≤n)$. Hãy xác định xem trong đoạn $[a,b]\ (1≤a≤b≤10^9,b-a≤10^5)$ có bao nhiêu số nguyên chia hết cho đúng $k$ số trong dãy số nguyên $P$?

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên $n$ và $k\ (1≤n≤10^5)$;
- Dòng thứ hai chứa $n$ số nguyên dương $p_1,p_2,…,p_n\ (1≤p_i≤10^9)$;
- Dòng thứ ba chứa hai số nguyên $a$ và $b$.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là kết quả tìm được.

## Ví dụ:
### Dữ liệu vào:
```
2 1
2 3
1 10
```

### Dữ liệu ra:
```
6
```

### Giải thích:
- Trong đoạn $[1,10]$ có đúng $6$ số nguyên chỉ chia hết cho $1$ số trong dãy $(2,3)$ là: $2, 3, 4, 8, 9, 10$.

### Dữ liệu vào:
```
2 1
2 2
1 10
```

### Dữ liệu ra:
```
0
```