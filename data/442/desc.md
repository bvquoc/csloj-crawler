Xâu ký tự $X$ được gọi là xâu con của xâu ký tự $Y$ nếu ta có thể xoá đi một số ký tự trong xâu $Y$ để được xâu $X$.

Cho biết hai xâu ký tự $A$ và $B$ chỉ gồm các chữ cái latin và chữ số, hãy tìm xâu ký tự $C$ có độ dài lớn nhất và là con của cả $A$ và $B$.

## Dữ liệu vào:
- Dòng đầu chứa xâu ký tự $A$;
- Dòng thứ hau chứa xâu ký tự $B$.

## Dữ liệu ra:
- Mộ dòng duy nhất chứa xâu $C$ tìm được, nếu có nhiều xâu con chung có cùng độ dài (dài nhất) thì ghi ra một xâu bất kỳ thỏa mãn.

## Ví dụ:
### Dữ liệu vào:
```
abc1def2ghi3
abcdefghi123
```

### Dữ liệu ra:
```
abcdefghi3
```

## Giới hạn:
- Độ dài các xâu $A, B$ không vượt quá $2000$.