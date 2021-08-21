**<center>NGUỒN: ĐỀ THI LẬP ĐỘI TUYỂN HỌC SINH GIỎI CỦA TỈNH DỰ THI CHỌN HỌC SINH GIỎI QUỐC GIA THPT NĂM 2020 TỈNH QUẢNG NINH</center>**
<br>

Cho dãy số $a_1,a_2,…,a_n$. Tìm cách chia dãy $a$ thành $s+1$ đoạn liên tiếp sao cho tổng các số trong đoạn lớn nhất là nhỏ nhất. Đoạn lớn nhất của một cách chia là đoạn có tổng lớn nhất trong các đoạn được chia.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên $n,s\ (2 ≤ n ≤ 1000, 1 ≤ s ≤ 50, s < n)$.
- Dòng thứ hai chứa $n$ số nguyên $a_1,a_2,…,a_n\ \left(|a_i |≤10^6\right)$.

## Dữ liệu ra:
- Một số nguyên duy nhất là tổng các số trong đoạn lớn nhất theo cách chia tìm được.

## Ví dụ:
#### Dữ liệu vào:
```
5 2
8 2 1 5 6
```

#### Dữ liệu ra:
```
8
```

#### Dữ liệu vào:
```
10 3
1 2 3 4 5 6 7 8 9 10
```

#### Dữ liệu ra:
```
17
```

#### Giải thích:
- Trong test $\#1$: Cách chia tối ưu là $\{8\}, \{2, 1, 5\}, \{6\}$

## Giới hạn:
- $30\%$ số test có $n≤20,0≤a_i≤10^6$;
- $30\%$ số test có $20<n≤1000,0≤a_i≤10^6$;
- $40\%$ số test còn lại có $n≤1000,|a_i|≤10^6$.