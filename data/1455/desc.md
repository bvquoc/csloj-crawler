**<center>NGUỒN: Bài tập thầy Lê Minh Hoàng ôn Tại Hải Phòng T11/2020</center>**

Bản đồ một kho hàng là hình chữ nhật kích thước ~𝑚 × 𝑛~ được chia làm lưới ô vuông đơn vị. Các hàng của bảng được đánh số từ ~1~ tới ~𝑚~ từ trên xuống dưới và các cột của bảng được đánh số từ ~1~ tới ~𝑛~ từ trái qua phải. Ô nằm trên giao của hàng ~𝑖~ và cột ~𝑗~ gọi là ô ~(𝑖, 𝑗)~. Trong kho có một số kiện hàng được xếp sẵn, mỗi kiện hàng xếp sẵn chiếm đúng ~1~ ô.

Robot là một hình chữ nhật chiếm trọn một số ô  trống trong kho hàng. Tại mỗi bước, bạn có thể ra lệnh cho robot di chuyển theo một trong bốn hướng song song với cạnh nhà kho. Khi nhận mỗi lệnh di chuyển, robot sẽ đi theo đúng hướng được yêu cầu cho tới khi:
- Hoặc robot đi ra khỏi nhà kho (chính xác là khi robot không chiếm ô nào trong nhà kho nữa), nhiệm vụ của bạn hoàn thành;
- Hoặc robot vướng vào một kiện hàng đã xếp sẵn theo hướng di chuyển (tức là kiện hàng đó sẽ bị robot đè lên nếu robot di chuyển tiếp), robot dừng lại và đợi lệnh di chuyển tiếp theo của bạn.

**Yêu cầu:** Tìm một dãy ngắn nhất các lệnh di chuyển đưa robot ra khỏi nhà kho.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương ~𝑚, 𝑛 ≤ 1000~ cách nhau bởi dấu cách.
- ~𝑚~ dòng tiếp theo, dòng thứ ~𝑖~ chứa ~𝑛~ ký tự liền nhau, ký tự thứ ~𝑗~ thể hiện tình trạng ô ~(𝑖, 𝑗)~ của nhà kho theo ý nghĩa sau:
   - Dấu thăng “#”: Ô ~(𝑖, 𝑗)~ có một kiện hàng xếp sẵn;
   - Dấu chấm “.” Ô ~(𝑖, 𝑗)~ là ô trống;
   - Chữ “R”: Ô ~(𝑖, 𝑗)~ đang bị robot chiếm chỗ.

Dữ liệu vào đảm bảo các ô chứa chữ R tạo thành một hình chữ nhật ứng với vị trí khởi đầu của robot.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là số lệnh di chuyển để đưa robot ra khỏi nhà kho. Nếu không tồn tại dãy lệnh di chuyển để đưa robot ra khỏi nhà kho, ghi ra số ~-1~.

## Ví dụ:
#### Dữ liệu vào:
```
8 8
########
.RRR...#
#RRR....
####...#
.......#
.......#
#......#
#...#..#
```

#### Dữ liệu ra:
```
4
```

#### Giải thích:
- Dãy lệnh di chuyển ngắn nhất để đưa robot ra khỏi nhà kho là: Sang phải, Đi xuống, Sang trái, Đi xuống.

#### Dữ liệu vào:
```
6 8
........
..#...#.
#.RR....
..RR...#
..#...#.
........
```

#### Dữ liệu ra:
```
-1
```

#### Dữ liệu vào:
```
8 6
.#..##
#RR..#
.RR..#
##...#
.....#
.....#
.#...#
######
```

#### Dữ liệu ra:
```
4
```
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)