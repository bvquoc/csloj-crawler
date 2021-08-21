Cho trước một danh sách rỗng. Người ta xét hai thao tác trên danh sách đó:
- Thao tác `+V` (ở đây ~V~ là một số nguyên): Nếu danh sách đang có ít hơn ~15000~ phần tử thì thao tác này bổ sung thêm phần tử ~V~ vào danh sách; Nếu không, thao tác này không có hiệu lực.
- Thao tác `-`: Nếu danh sách đang không rỗng thì thao tác này loại bỏ tất cả các phần tử lớn nhất của danh sách; Nếu không, thao tác này không có hiệu lực.

Sau ~N~ thao tác, hãy liệt kê các phần tử còn lại trong danh sách **theo thứ tự giảm dần**.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương ~N~ là số thao tác;
- ~N~ dòng tiếp theo cho biết thông tin của các thao tác (các thao tác được liệt kê theo đúng thứ tự thực hiện).

## Dữ liệu ra:
- Dòng đầu ghi số lượng các giá trị còn lại trong danh sách;
- Dòng hai liệt kê các phần tử còn lại **theo thứ tự giảm dần**, hai số liên tiếp ghi cách nhau một dấu cách.

## Ví dụ:
#### Dữ liệu vào:
```
13
+1
+3
+2
+3
-
+4
+4
-
+2
+9
+7
+8
-
```

#### Dữ liệu ra:
```
4
8 7 2 1
```

## Giới hạn:
- ~1 ≤ N ≤ 10^5;  0 ≤ V ≤ 10^9~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)