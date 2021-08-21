Trường ta đã xây dựng được phong trào Flash Mob thu hút được đông đảo các bạn trẻ quan tâm. Trường có ~33~ lớp được đánh số từ ~1~ đến ~33~. Hàng tuần, đoàn trường tổ chức các trận thi đấu giữa các lớp. Lớp giữ cờ vô địch đầu năm nay là lớp có số thứ tự ~C_1~ (lớp vô địch cuối cùng của năm trước). Hàng tuần có diễn ra các trận thi đấu, mỗi trận thi đấu giữa hai lớp, lớp nào thắng được lớp đang giữ cờ vô địch sẽ được giữ cờ vô địch. Từ đầu năm đến nay đã diễn ra ~n~ trận đấu.

**Yêu cầu:** Cho biết ~C_1, n~ và ~n~ trận đấu đã diễn ra. Hãy xác định lớp đang giữ cờ vô địch và số lớp đã từng giữ cờ vô địch trong năm nay.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương ~C_1~ là chỉ số lớp giữ cờ vô dịch đầu năm và ~n~ là số trận đấu đã diễn ra từ đầu năm đến nay;
- ~n~ dòng tiếp theo, dòng thứ ~i~ chứa hai số nguyên dương ~a_i, b_i~ cho biết đã diễn ra trận đấu giữa lớp ~a_i~ và ~b_i~ (**trong đó lớp ~a_i~ thắng**, các trận đấu được liệt kê theo đúng thứ tự đã diễn ra).

Hai số liên tiếp trên một dòng được ghi cách nhau một dấu cách.

## Dữ liệu ra:
- Ghi ra trên một dòng hai số nguyên là chỉ số lớp đang giữ cờ vô địch và số lớp đã giữ cờ vô địch trong năm nay.

## Ví dụ:
#### Dữ liệu vào:
```
1 3
2 1
3 2
4 1
```

#### Dữ liệu ra:
```
3 3
```

#### Giải thích:
- Sau trận đấu thứ nhất (lớp ~2~ thắng lớp ~1~), lớp ~2~ giữ cờ vô địch;
- Sau trận đấu thứ hai (lớp ~3~ thắng lớp ~2~), lớp ~3~ giữ cờ vô địch;
- Trận đấu thứ ba không ảnh hưởng đến lớp giữ cờ vô địch.

**Vậy:** Lớp đang giữ cờ vô địch là lớp ~3~ và có ~3~ lớp đã giữ cờ vô địch là ~1, 2, 3~.

## Giới hạn:
- Trong tất cả các test: ~1 ≤ n ≤ 100; 1 ≤ a_i, b_i ≤ 33; a_i ≠ b_i~.