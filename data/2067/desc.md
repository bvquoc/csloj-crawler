**<center>Nguồn: Free Contest 8 (9)</center>**

Cho dãy số nguyên $a$ gồm $n$ phần tử. Cho $m$ truy vấn có dạng $L\ R$, với mỗi truy vấn, in ra tổng các số của dãy $a$ trong đoạn từ $L$ đến $R$.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên dương $n$ và $m\ (1 ≤ n ≤ 10^5, 1 ≤ m ≤10^5)$;
- Dòng thứ hai chứa $n$ số nguyên là các phần tử của dãy $a$. Các số này có trị tuyệt đối không quá $10^9$;
- $m$ dòng tiếp theo, mỗi dòng chứa hai số nguyên $L$ và $R$ thể hiện một truy vấn $(1 ≤ L ≤ R ≤ n)$.

## Dữ liệu ra:
- Với mỗi truy vấn, in ra tổng các số trong đoạn từ $L$ đến $R$.

## Ví dụ:
#### Dữ liệu vào:
```
3 2
-1 -1 1
2 3
1 1
```

#### Dữ liệu ra:
```
0
-1
```

#### Dữ liệu vào:
```
2 3
-6 -5
1 1
1 2
2 2
```

#### Dữ liệu ra:
```
-6
-11
-5
```

#### Dữ liệu vào:
```
4 4
17 -17 -21 6
1 3
4 4
4 4
2 4
```

#### Dữ liệu ra:
```
-21
6
6
-32
```