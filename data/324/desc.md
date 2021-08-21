Số nguyên dương ~n~ được gọi là **số hoàn thiện** nếu tổng của tất cả các ước nguyên dương thực sự của ~n~ bằng đúng ~n~.
Cho số nguyên dương ~n~. Kiểm tra xem ~n~ có phải **số hoàn thiện** hay không?

## Dữ liệu vào:
- Dòng đầu ghi số nguyên dương ~T~ là số bộ test;
- ~T~ dòng tiếp theo, mỗi dòng chứa một số nguyên dương ~n~.

## Dữ liệu ra:
- Với mỗi số nguyên dương ~n~, nếu ~n~ là số hoàn thiện thì ghi ra `YES`, ngược lại, ghi `NO`.

## Ví dụ:
#### Dữ liệu vào:
```
3
6
10
28
```

#### Dữ liệu ra:
```
YES
NO
YES
```

#### Giải thích:
- Test case ~\#1~: Số ~6~ có ba ước thực sự là ~1, 2, 3~ có tổng bằng ~6~
- Test case ~\#2~: Số ~10~ có các ước thực sự là ~1, 2, 5~ có tổng bằng ~8~ (khác ~10~)
- Test case ~\#3~: Số ~28~ có các ước thực sự là ~1, 2, 4, 7, 14~ có tổng bằng ~28~

## Giới hạn:
- ~1 ≤ T ≤ 10^5, 1 ≤ n ≤ 10^9~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)