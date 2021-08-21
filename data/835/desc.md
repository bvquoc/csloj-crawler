Siêu thị Vincom Sơn La đang có đợt giảm giá. Siêu thị có ~n~ mặt hàng đánh số từ ~1~ đến ~n~, mặt hàng thứ ~i~ có giá là ~c_i~. Trong đợt giảm giá này, cứ mua ~3~ mặt hàng thì siêu thị sẽ giảm giá cho mặt hàng có giá cao nhất trong ~3~ mặt hàng đó.

**Yêu cầu:** Hãy tính số tiền tối thiểu cần bỏ ra để mua hết ~n~ mặt hàng của siêu thị.

## Dữ liệu vào:
- Dòng đầu tiên ghi số ~n~ là số mặt hàng của siêu thị;
- Dòng thứ hai ghi ~n~ số nguyên dương ~c_1,c_2,…,c_n\ (1≤c_i≤10^9)~. Hai số liên tiếp được ghi cách nhau một khoảng trắng.

## Dữ liệu ra:
- Một số nguyên duy nhất là số tiền tối thiểu cần bỏ ra để mua hết ~n~ mặt hàng của siêu thị.

## Ví dụ:
#### Dữ liệu vào:
```
5
10 3 7 5 8
```

#### Dữ liệu ra:
```
23
```

**Giải thích:** Ta mua mặt hàng ~1,2,3~ sẽ được khuyến mại mặt hàng ~1~ nên cần trả ~10~ đồng, mua mặt hàng ~4,5~ cần trả ~13~ đồng nữa. Tổng cộng cần trả ~23~ đồng.

## Giới hạn:
- **Subtask** ~\#1: 60\%~ số điểm của bài có ~1≤n≤1000~;
- **Subtask** ~\#2: 40\%~ số điểm còn lại của bài có ~1000< n≤10^5~.