**<center>NGUỒN: Contest tháng 12/2017 Day 1 (Hiếu Hưng Yên - Second Round of Hải phòng)</center>**
<br>

Đất nước HP xinh đẹp là một quần đảo gồm ~N~ đảo đánh số từ ~1~ đến ~N~, có ~M~ đường bay hai chiều giữa các đảo được đánh số từ ~1~ đến ~M~, đường bay thứ ~i~ nối hai đảo ~a_i~ và ~b_i~ có độ dài ~d_i~.

Việc di chuyển giữa các đảo không thực hiện bằng máy bay như bình thường mà bay bằng rồng. Mỗi đảo có một con rồng, con rồng ở đảo ~i~ có thể bay được một quãng đường xa nhất là ~T_i~ (gọi là sức bay), như vậy để con rồng ở đảo ~i~ bay được trên con đường ~j~ (nối đảo ~i~ với một đảo khác) thì ~T_i≥d_j~.

Khi di chuyển từ đảo ~i~ đến đảo ~j~, để tiếp tục chuyến bay, bạn có thể sử dụng con rồng đang dùng hoặc đổi sang con rồng ở đảo ~j~.

Hoàng tử Dương Phong đang sống ở đảo số ~1~, anh ấy muốn biết hai thông tin sau để chuẩn bị cho chuyến du lịch của mình:
- Xuất phát từ đảo ~1~, anh ấy sử dụng con rồng tại đảo ~1~, không đổi rồng trong suốt hành trình thì anh ấy có thể gặp con rồng có sức bay lớn nhất là bao nhiêu?
- Xuất phát từ đảo ~1~, có thể đổi rồng trên đường đi thì độ dài đường đi ngắn nhất từ ~1~ đến ~N~ là bao nhiêu?

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên dương ~p~ tương ứng ~p=1~ là câu hỏi ~a~ và ~p=2~ là câu hỏi ~b~;
- Dòng tiếp theo chứa hai số nguyên dương ~N,M\ (1≤N≤800;1≤M≤6000)~ theo thứ tự là số lượng đảo và số đường bay hai chiều;
- Dòng tiếp theo ghi ~N~ số nguyên dương, số thứ ~i~ là ~T_i\ (1≤T_i≤50000)~ tương ứng là sức bay của con rồng ở đảo ~i~;
- ~M~ dòng tiếp theo, dòng thứ ~j~ chứa ba số nguyên ~u_j,v_j,d_j~ tương ứng là có đường bay nối hai đảo ~u_j,v_j~ và độ dài ~d_j\ (1≤d_j≤50000)~.

Các số trên một dòng được ghi cách nhau bởi dấu cách.

## Dữ liệu ra:
- Nếu ~p=1~ thì ghi kết quả của câu hỏi ~a~, nếu ~p=2~ thì ghi kết quả của câu hỏi ~b~;
Với câu hỏi ~b~, dữ liệu đảm bảo có thể bay từ ~1~ đến ~N~ và độ dài đường đi ngắn nhất là số nguyên không quá ~10^9~

## Ví dụ:
#### Dữ liệu vào:
```
1
5 6
6 3 13 20 26
1 2 5
1 3 7
1 5 10
2 3 6
3 4 5
3 5 14
```
#### Dữ liệu ra:
```
20
```

#### Giải thích:
- ~p=1~: từ đảo ~1~ thực hiện chuyến bay mà không đổi rồng ở các đảo thì ta có thể đi: ~1→2, 2→3, 3→4~. Vậy Dương Phong có thể gặp con rồng ở đảo ~4~ có sức bay lớn nhất là ~20~

#### Dữ liệu vào:
```
2
5 6
6 3 13 20 26
1 2 5
1 3 7
1 5 10
2 3 6
3 4 5
3 5 14
```
#### Dữ liệu ra:
```
28
```

#### Giải thích:
- ~p=2~: từ đảo ~1~ thực hiện chuyến bay đến đảo ~N~. 
    - ~1→2~: sử dụng rồng ~1~, quãng đường ~5~;
    - ~2→3~: sử dụng rồng ~1~, quãng đường ~6~, đổi rồng;
    - ~3→1~: sử dụng rồng ~3~, quãng đường ~7~;
    - ~1→5~: sử dụng rồng ~3~, quãng đường ~10~.
- Tổng độ dài đường đi ngắn nhất là: ~5+6+7+10=28~.

## Giới hạn:
- Câu hỏi ~a~ ứng với ~p=1~ được ~20\%~ số điểm của bài toán
- Câu hỏi ~b~ ứng với ~p=2~ được 80% số điểm của bài toán.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)