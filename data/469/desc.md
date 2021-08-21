**<center>(Đề đề xuất DHBB 2017 của THPT CHUYÊN HƯNG YÊN)</center>**

Hai đội Bình Minh và Rạng Đông chơi một trò chơi ghi điểm với ~M~ cách ghi điểm với các điểm số lần lượt là ~d_1, d_2, …, d_M~ (Một cách ghi điểm có thể thực hiện nhiều lần trong một trận đấu). Mỗi khi một đội ghi điểm, các cầu thủ đội còn lại phải chống đẩy số lần đúng bằng số điểm hiện tại của đội đối phương. Ví dụ, lần đầu đội Bình Minh ghi ~7~ điểm, đội Rạng Đông chống đẩy ~7~ lần. Lần thứ hai ghi ~3~ điểm (được tổng ~10~ điểm), đội Rạng Đông phải chống đẩy ~10~ lần. Tương tự, đội Bình Minh ghi tiếp ~2~ điểm, đội Rạng Đông chống đẩy tiếp ~12~ lần. Tổng số lần chống đẩy trong trường hợp này là ~7+10+12 = 29~.

An là một thành viên ở đội Rạng Đông. An đếm được mình đã chống đẩy tất cả ~N~ lần. Hỏi số điểm tối đa đội Bình Minh đã ghi được là bao nhiêu?

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương ~N, M~ với ~N~ là số lần An chống đẩy trong trận đấu, ~M~ là số cách ghi điểm mà các đội có thể thực hiện.
- Dòng thứ hai chứa ~M~ số nguyên dương ~d_1, d_2, …, d_M~.

## Dữ liệu ra:
- Một số nguyên duy nhất là số điểm tối đa mà đội Bình Minh đã ghi được. Nếu không có cách ghi điểm nào để An phải chống đẩy ~N~ (có thể do An đếm sai) thì ghi ra số ~–1~.

## Ví dụ:
#### Dữ liệu vào:
```
29 3
7 2 3
```

#### Dữ liệu ra:
```
14
```

#### Giải thích:
- Số điểm đội Bình Minh lần lượt ghi là ~3, 2, 2, 7~, tổng bằng ~14~. Số lần chống đẩy ~3+5+7+14 = 29~.

## Giới hạn:
- ~1 ≤ N ≤ 5000; 1 ≤ M ≤ 10; 1 ≤ d_i ≤ 20~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)