Bản đồ một mê cung hình chữ nhật được chia thành lưới ô vuông kích thước ~m×n~, trên mỗi ô ~(i, j)~ ghi một ký tự ~a_{ij}~:
- ~a_{ij} =~ `.` nếu ô đó là ô an toàn;
- ~a_{ij} =~ `E` nếu là ô có một nhà thám hiểm đang đứng, có đúng một ô ghi chữ `E`;
- ~a_{ij} =~ `X` nếu đó là ô nguy hiểm.

Tại mỗi thời điểm, nhà thám hiểm chỉ được di chuyển sang một trong các ô an toàn kề cạnh với ô đang đứng.

**Yêu cầu:** Hãy tìm hành trình di chuyển giúp cho nhà thám hiểm thoát ra một ô nằm ở biên của mê cung.

## Dữ liệu vào:
- Dòng đầu chứa hai số ~m, n~ cách nhau ít nhất một dấu cách;
- ~m~ dòng tiếp theo, dòng thứ ~i~ chứa ~n~ ký tự, ký tự thứ ~j~ là ~a_{ij}~.

## Dữ liệu ra:
- Dòng đầu ghi từ `YES` hay `NO` tuỳ theo có tồn tại đường đi thoát khỏi mê cung hay không;
- Nếu dòng đầu ghi từ `YES`, các dòng tiếp theo, mỗi dòng ghi chỉ số hàng và chỉ số cột của một ô trong hành trình cách nhau ít nhất một dấu cách. Các ô trên đường đi phải được liệt kê theo đúng thứ tự đi qua, bắt đầu từ ô mà nhà thám hiểm đang đứng tới ô biên kết thúc hành trình, không có ô nào được lặp lại trong hành trình. Nếu có nhiều hành trình thỏa mãn thì ghi ra một hành trình bất kỳ.

## Ví dụ:
#### Dữ liệu vào:
```
10 10
XXXXXXXXXX
XXXXXXXXXX
XX.....XXX
XX.XXX.XXX
XX.EXX...X
XXXXXX.X.X
.......X.X
XXXXXXXX.X
.........X
XXXXXXXXXX
```

#### Dữ liệu ra:
```
YES
5 4
5 3
4 3
3 3
3 4
3 5
3 6
3 7
4 7
5 7
6 7
7 7
7 6
7 5
7 4
7 3
7 2
7 1
```

## Giới hạn:
- ~1 ≤ n, m ≤ 100~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)