Có ~N~ người sắp hàng mua vé dự buổi hoà nhạc. Ta đánh số họ từ ~1~ đến ~N~ theo thứ tự đứng trong hàng. Mỗi người cần mua một vé, song người bán vé được phép bán cho mỗi người tối đa hai vé. Vì thế, một số người có thể rời hàng và nhờ người đứng trước mình mua hộ vé. Biết ~t_i~ là thời gian cần thiết để người ~i~ mua xong vé cho mình. Nếu người ~i+1~ rời khỏi hàng và nhờ người ~i~ mua hộ vé thì thời gian để người thứ ~i~ mua được vé cho cả hai người là ~r_i~ (tất nhiên người đầu hàng sẽ không thể nhờ ai mua vé hộ).

Hãy tính xem, nếu mọi người nhờ mua vé một cách thích hợp nhất có thể thì tổng thời gian người bán hàng phải phục vụ ít nhất là bào nhiêu?

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên dương ~N~;
- Dòng thứ hai chứa ~N~ số nguyên dương ~t_1, t_2, …, t_N~, mỗi số cách nhau bởi một dấu cách;
- Dòng thứ bai chứa ~N – 1~ số nguyên dương ~r_1, r_2, …, r_{N – 1}~, mỗi số cách nhau bởi một dấu cách.

## Dữ liệu ra:
- Một số nguyên duy nhất là thời gian tối thiểu người bán vé phải phục vụ.

## Ví dụ:
#### Dữ liệu vào:
```
5
2 5 7 8 4
4 9 10 10
```

#### Dữ liệu ra:
```
18
```

## Dữ liệu vào:
```
4
5 7 8 4
50 50 50
```

#### Dữ liệu ra:
```
24
```

#### Giải thích:
- Test case ~\#1~: Người thứ ~2~ và người thứ ~4~ rời khỏi hàng để nhờ người thứ nhất và người thứ ~3~ mua hộ, tổng thời gian là: ~4 + 10 + 4 = 18~
- Test case ~\#2~: Mọi người tự mua vé cho mình: Tổng thời gian là ~5 + 7 + 8 + 4 = 24~

## Giới hạn:
- ~1 ≤ N ≤ 60000, 1 ≤ t_i, r_i ≤ 30000~.