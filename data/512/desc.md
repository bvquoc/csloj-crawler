Cho dãy số nguyên gồm $n$ phần tử $a_1, a_2, …, a_n$ và $Q$ truy vấn. Mỗi truy vấn có một trong hai dạng:
- Dạng $1:1\ i\ x:$ cộng vào số ở vị trí $i$ giá trị $x$ (tức là $a_i = a_i + x$);
- Dạng $2:2\ u\ v:$ Tìm tổng các số trong đoạn $[u, v]$ (tức là  tổng $a_u + a_{u + 1} + … + a_v$).

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương $n$ và $Q$;
- Dòng thứ hai chứa $n$ số nguyên $a_1, a_2, …, a_n$;
- $Q$ dòng tiếp theo, mỗi dòng là $3$ số nguyên mô tả một truy vấn.

Hai số liên tiếp trên một dòng được ghi cách nhau ít nhất một dấu cách.

## Dữ liệu ra:
- Ghi trên một dòng nhiều số nguyên, mỗi số là câu trả lời cho truy vấn loại $2$ (theo đúng thứ tự thực hiện các truy vấn), hai số liên tiếp ghi cách nhau một khoảng trắng.

## Ví dụ:
#### Dữ liệu vào:
```
5 3
2 -1 5 3 -3
2 1 4
1 3 2
2 2 5
```

#### Dữ liệu ra:
```
9 6
```

## Giới hạn:
- $1 ≤ n ≤ 10^5; 1 ≤ u ≤ v ≤ n; 1 ≤ Q ≤ 10^5; |x|, |a_i| ≤ 10^4$.