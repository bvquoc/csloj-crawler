<!--**<center>CSP Open Contest 1</center>**-->

Đất nước Bụng Bự đang bị giặc ngoại xâm hoành hành và chiến lược gia đại tài FatEqual đang lên kế hoạch để đối phó với quân thù. Đất nước Bụng Bự có ~N~ thị trấn được đánh số từ ~0~ đến ~N − 1~ và được kết nối liên thông với nhau bằng ~N − 1~ con đường. FatEqual sẽ lên kế hoạch phòng thủ tối đa ~K~ thị trấn sao cho ~2~ thị trấn bất kì được phòng thủ có thể đến được với nhau mà chỉ đi qua các thị trấn đang được phòng thủ. Độ tốt của kế hoạch đó là độ dài một đoạn liên tiếp ~[l, r]~ sao cho các thị trấn có chỉ số từ ~l~ đến ~r~ đều được phòng thủ. FatEqual muốn tính xem độ tốt lớn nhất của kế hoạch mà mình có thể lên là bao nhiêu. Các bạn hãy giúp FatEqual nhé!

## Dữ liệu vào:
- Dòng đầu tiên bao gồm ~2~ số ~N~ và ~K~;
- ~N − 1~ dòng tiếp theo mỗi dòng gồm hai số nguyên dương miêu tả một con đường trong thị trấn.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là độ dài lớn nhất của đoạn liên tiếp mà FatEqual có thể phòng thủ.

## Ví dụ
#### Dữ liệu vào:
```
12 10
11 2
2 1
11 7
7 4
11 10
1 6
11 8
4 0
1 5
11 3
7 9
```

#### Dữ liệu ra:
```
9
```

#### Giải thích:
- Chọn tập đỉnh ~1, 2, 3, 4, 5, 6, 7, 8 , 9,11~. Khi đó đoạn liên tiếp lớn nhất ta có thể tìm là ~[1, 9]~.

## Giới hạn:
- Subtask ~\#1: 20\%~ số điểm có ~1 ≤ K ≤ N ≤ 2000~;
- Subtask ~\#2: 30\%~ số điểm khác có ~1≤ K ≤ N ≤ 3\times 10^5~ và bậc của mỗi đỉnh tối đa bằng ~2~;
- Subtask ~\#3: 50%~ số điểm còn lại có ~1 ≤ K ≤ N ≤ 3\times 10^5~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)