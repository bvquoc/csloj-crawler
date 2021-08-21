**<center>Nguồn: Ôn HN tháng 11/2016, Thầy Nguyễn Đức Nghĩa, Ngày 3</center>**

Giám đốc một công ty trách nhiệm hữu hạn muốn xin chữ ký của ông Kiến trúc sư trưởng thành phố phê duyệt dự án xây dựng trụ sở làm việc của Công ty. Ông kiến trúc sư trưởng chỉ ký vào giấy phép khi bà thư ký của ông ta đã ký đuyệt vào giấy phép. Bà thư ký làm việc tại tầng thứ $M$ của toà nhà trụ sở làm việc gồm $M$ tầng của Văn phòng Kiến trúc sư trưởng thành phố. Các tầng của toà nhà được đánh số từ $1$ đến $M$ từ thấp đến cao. Mỗi tầng của toà nhà có $N$ phòng được đánh số từ $1$ đến $N$ từ trái qua phải. Trong mỗi phòng chỉ có $1$nhân viên làm việc. Giấy phép chỉ được bà thư ký ký duyệt khi có ít nhất một nhân viên ở tầng $M$ đã ký xác nhận. Một nhân viên bất kỳ chỉ ký xác nhận vào giấy phép khi có ít nhất một trong các điều kiện sau được thoả mãn:
- a) Nhân viên đó làm việc ở tầng $1$;
- b) Giấy phép đã được ký xác nhận bởi nhân viên làm việc ở cùng số phòng ở tầng sát dưới;
- c) Giấy phép đã được ký xác nhận bới nhân viên làm việc ở phòng liền kề (hai phòng gọi là liên kề nếu chúng ở cùng tầng và chỉ số phòng sai khác nhau $1$).

Mỗi một nhân viên khi ký xác nhận đều đòi một khoản lệ phí.

**Yêu cầu:** Hãy chỉ ra cách xin được chữ ký của Kiến trúc sư trưởng đòi hỏi tổng lệ phí phải trả cho các nhân viên là nhỏ nhất.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số $M, N\ (1 ≤ M 100; 1 ≤ N ≤ 500)$;
- Dòng thứ $i$ trong số $M$ dòng tiếp theo chứa $N$ số nguyên đương $C_{i1}, C_{i2}, …, C_{iN}$ là lệ phí cần trả nhân viên ở các phòng $1, 2,…, N$ trên tầng $i\ (i= 1, 2,…M)$. Giả thiết là $C_{ij}≤10^9$ và tổng chi phí cần trả cũng không vượt quá $10^9$.

## Dữ liệu ra:
- Ghi ra tổng chỉ phí cần trả nhỏ nhất tìm được.

## Vị dụ:
#### Dữ liệu vào:
```
3 4
10 10 1 10
2 2 2 10
1 10 10 10
```

#### Dữ liệu ra:
```
8
```