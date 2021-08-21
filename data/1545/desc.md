Sắp đến ngày Valentine rồi, Bob đã mua một hộp Chocolate để tặng Alice, tuy nhiên do mua quá sớm lại không kìm hãm được sự sung sướng nên Bob đã ăn mất một số cái của hộp Chocolate. Để tránh việc tiếp tục không kìm chế được sẽ ăn hết luôn cả hộp, Bob quyết định lấy băng dính dán lại thật kỹ.

Hộp Chocolate Bob mua có dạng một hình chữ nhật ~m\times n~ (~m~ dòng, ~n~ cột), mỗi ô có dạng hình vuông cạnh ~1~ đơn vị có chứa một thanh Chocolate, Bob đã ăn mất một số thanh ở một số ô.

Cuộn băng dính mà Bob có được có chiều dài vô hạn, cố bề rộng ~1~ đơn vị. Bob muốn dùng cuộn băng dính để dán hộp Chocolate của mình theo cách sau:
- Mỗi đoạn băng dính sẽ dán một đoạn các ô liên tiếp cùng hàng hoặc cùng cột;
- Dán hết những ô còn Chocolate, không dán những ô đã ăn hết Chocolate;
- Mỗi ô còn Chocolate dán không quá một lớp băng dính.

**Yêu cầu:** Hãy tính số lượng ít nhất các đoạn băng dính cần cắt ra để dán hết hộp Chocolate của Bob theo cách trên.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương ~m, n\ \left(1\le m\le1000;\ 1\le n\le10\right)~;
- ~m~ dòng tiếp theo, mỗi dòng chứa một xâu ký tự độ dài ~n~ chỉ gồm các ký tự `#` và `.` mô tả một hàng của hộp Chocolate, trong đó ký tự `#` thể hiện ô còn Chocolate, ký tự `.` thể hiện ô đã bị Bob ăn hết Chocolate.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là số đoạn băng dính ít nhất cần cắt ra để dán hết hộp Chocolate của Bob.

## Ví dụ:
#### Dữ liệu vào:
```
2 3
#.#
###
```

#### Dữ liệu ra:
```
3
```

#### Dữ liệu vào:
```
4 3
.#.
###
.##
.#.
```

#### Dữ liệu ra:
```
3
```

#### Dữ liệu vào:
```
4 4
####
#.#.
#.##
####
```

#### Dữ liệu ra:
```
5
```

## Giới hạn:
- Subtask ~\#1: 30\%~ số điểm thỏa mãn mỗi ô còn Chocolate kề với (có chung cạnh) không quá ~2~ ô còn Chocolate khác.
- Subtask ~\#2: 30\%~ số điểm khác có ~1\le m\le 10~;
- Subtask ~\#3: 40\%~ số điểm còn lại không có ràng buộc bổ sung.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)