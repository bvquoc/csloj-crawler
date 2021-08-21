**<center>NGUỒN: Bài tập Bồi dưỡng HSGQG, Hải Phòng, T11/2020, Thái BK</center>**

Cho dãy số nguyên $a$. Dãy con của $a$ là dãy thu được bằng cách xóa đi một số phần tử của $a$ (có thể không xóa phần tử nào, cũng có thể xóa hết tất cả). Một dãy con được gọi là lỗ chỗ nếu nó không chứa hai phần tử liên tiếp
trong $a$. Hãy tìm dãy con lỗ chỗ có tổng lớn nhất của dãy $a$.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương $n$ là số phần tử của dãy $a$;
- Dòng tiếp theo chứa dãy $a$.

## Dữ liệu ra:
- Dòng đầu chứa tổng lớn nhất tìm được;
- Dòng tiếp theo chứa $k$ là độ dài dãy con tìm được;
- Dòng tiếp theo chứa $k$ số là chỉ số của các phần tử được chọn theo thứ tự trên dãy $a$.

Nếu có nhiều dãy con tốt nhất, hãy in ra dãy con có thứ tự từ điển nhỏ nhất.

## Ví dụ:
#### Dữ liệu vào:
```
5
1 1 3 2 1
```

#### Dữ liệu ra:
```
5
3
1 3 5
```

## Giới hạn:
- $n ≤ 10^5; −10^9 ≤ a_i ≤ 10^9$;
- $30\%$ test với $n ≤ 20$;
- $30\%$ test với $20 < n ≤ 1000$.