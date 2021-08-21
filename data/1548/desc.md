TABLE – Bảng nhỏ nhất
Cho một bảng ~m~ dòng ~n~ cột. Trên mỗi ô của bảng có một ký tự `*` hoặc `.`.

Ta định nghĩa phép so sánh hai bảng ~m×n~ là so sánh hai xâu ký tự có được bằng cách ghép liên tiếp các hàng của bảng.

Xét các phép biến đổi bảng bằng cách dịch chuyển theo vòng tròn các hàng hoặc các cột. Hãy biến đổi bảng đã cho thành bảng có thứ tự từ điển nhỏ nhất.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương ~m,n\ (1≤m,n≤1000)~;
- ~m~ dòng tiếp theo, mỗi dòng chứa một xâu ký tự độ dài ~n~ chỉ gồm các ký tự `*` và `.` mô tả một hàng của bảng.

## Dữ liệu ra:
- Ghi ra ~m~ dòng, mỗi dòng ~n~ ký tự mô tả bảng nhỏ nhất biến đổi được.

## Ví dụ:
#### Dữ liệu vào:
```
3 3
.**
*..
.*.
```

#### Dữ liệu ra:
```
**.
..*
*..
```

#### Dữ liệu vào:
```
3 4
....
..*.
....
```

###### Dữ liệu ra:
```
*...
....
....
```

#### Dữ liệu vào:
```
3 5
.**..
.***.
..**.
```

#### Dữ liệu ra:
```
***..
.**..
**...
```

#### Giải thích:
Với test ví dụ đầu, tất cả các bảng có thể biến đổi thành như sau:
```
.**     .*.     *..     **.     *..     ..*     *.*     ..*     .*.
*..     .**     .*.     ..*     **.     *..     .*.     *.*     ..*
.*.     *..     .**     *..     ..*     **.     ..*     .*.     *.*
```

## Giới hạn:
- Subtask ~\#1: 10\%~ số điểm có ~m,n≤50~;
- Subtask ~\#2: 35\%~ số điểm khác có ~m,n≤300~;
- Subtask ~\#3: 55\%~ số điểm còn lại không có ràng buộc bổ sung.