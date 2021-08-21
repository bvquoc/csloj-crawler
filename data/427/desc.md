Siêu thị Sơn La Mart mở một cuộc siêu khuyến mại nhằm khuyến khích người tiêu dùng mua hàng.

Siêu thị khuyến mãi $N$ ngày. Ngày thứ $i$ chỉ bán một sản phẩm có giá là $p_i$, tuy nhiên nếu $p_i > 100$ thì khách hàng sẽ nhận được một voucher khuyễn mãi mua một món hàng miễn phí với bất cứ giá nào ở các ngày sau (Nếu đổi bằng thẻ voucher thì không được tặng voucher dù món hàng đó có giá > $100$).

Công tử Bạc Liêu nhân cơ hội này quyết mua tất cả các mặt hàng ở mỗi ngày, đơn giản vì nhà có điều kiện. Dù nhà chả thiếu gì ngoài điều kiện nhưng Công tử Bạc Liêu vẫn muốn tiết kiệm tối đa.

**Yêu cầu:** Tìm tổng số tiền ít nhất mà Công tử Bạc Liêu phải trả (mua bán khôn ngoan nhất, tất nhiên ban đầu Công tử Bạc Liêu không có voucher nào).

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương $N$;
- Dòng sau chứa $N$ số nguyên dương $p_1, p_2, …, p_N$. Mỗi số cách nhau bởi một dấu cách.

## Dữ liệu ra:
- Một số nguyên dương duy nhất là đáp số của bài toán.

## Ví dụ:
#### Dữ liệu vào:
```
5
35 40 101 59 63
```

#### Dữ liệu ra:
```
235
```

#### Giải thích:
- Ba ngày đầu mua hết $176$ (đơn vị tiền) và nhận được $1$ voucher, ngày $4$ mua bằng tiền hết $59$ (đơn vị tiền), ngày $5$ mua bằng voucher. Tổng cộng hết $176 + 59 = 235$ (đơn vị tiền).

## Giới hạn:
- $1 ≤ N ≤ 1000, 1 ≤ p_i ≤ 300$