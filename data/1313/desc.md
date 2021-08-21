**<center>NGUỒN: ĐỀ THI CHỌN ĐỘI TUYỂN DỰ THI HỌC SINH GIỎI QUỐC GIA - 2020 - HẢI PHÒNG</center>**

Cho đồ thị vô hướng có ~n~ đỉnh (các đỉnh đánh số từ ~1~ đến ~n~) và ~m~ cạnh.

**Yêu cầu:** Hãy đếm số cặp đỉnh ~u,v~ không sắp thứ tự (tức là cặp ~(u,v)~ và ~(v,u)~ là một) sao cho luôn tồn tại đường đi giữa hai đỉnh ~u,v~ khi loại bỏ bất kỳ một cạnh nào trên đồ thị.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên dương ~n,m~;
- ~m~ dòng tiếp theo, mỗi dòng chứa hai số ~u,v\ (1≤u,v≤n,u≠v)~ mô tả có cạnh nối đỉnh ~u~ và đỉnh ~v~. Dữ liệu đảm bảo giữa hai đỉnh bất kỳ có nhiều nhất một cạnh nối.

Các số trên một dòng được ghi cách nhau bởi dấu cách.

## Dữ liệu ra:
- Ghi ra một số duy nhất là số cặp đỉnh u,v thỏa mãn yêu cầu đề bài.

## Ví dụ:
#### Dữ liệu vào:
```
5 5
1 2
2 3
3 1
2 4
2 5
```

#### Dữ liệu ra:
```
3
```

#### Giải thích:
- Có ~3~ cặp đỉnh thỏa mãn yêu cầu đề bài là khi loại bỏ một cạnh bất kỳ thì vẫn tồn tại đường đi giữa hai đỉnh là ~(1;2),(2;3),(3;1)~.

## Giới hạn:
- ~30\%~ số test tương ứng với ~30\%~ số điểm có ~n≤20,m≤100~;
- ~20\%~ số test khác tương ứng với ~20\%~ số điểm có ~n≤100,m≤1000~;
- ~20\%~ số test khác tương ứng với ~20\%~ số điểm có ~n≤1000,m≤10000~;
- ~30\%~ số test khác tương ứng với ~30\%~ số điểm có ~n≤100000,m≤200000~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)