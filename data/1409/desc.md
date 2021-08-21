**<center>NGUỒN: Bài tập Bồi dưỡng HSGQG, Hải Phòng, T11/2020, Thái BK</center>**

Cho bảng số nguyên không âm gồm ~n~ dòng ~m~ cột. Hãy xác định bảng vuông con lớn nhất có tổng không vượt quá ~k~.

## Dữ liệu vào:
- Dòng đầu chứa ~n, m, k~;
- ~n~ dòng tiếp theo mỗi dòng chứa ~m~ số nguyên không âm ~a_{ij}~.

## Dữ liệu ra:
- Ghi một số nguyên duy nhất là kích thước cạnh bảng vuông tìm được.

## Ví dụ:
#### Dữ liệu vào:
```
5 4 24
3 9 2 6
5 4 2 7
1 3 2 8
4 2 1 8
3 6 4 7
```

#### Dữ liệu ra:
```
3
```

#### Giải thích:
<center><img src="/images/problems/1409/TABLE.png" width="300px" /></center>

## Giới hạn:
- ~0 ≤ k, a_{ij} ≤ 10^9~;
- Có ~50\%~ test với ~1 ≤ n, m ≤ 100~;
- Có ~50\%~ test với ~100 < n, m ≤ 5000~.